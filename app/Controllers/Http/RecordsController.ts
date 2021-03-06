// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Record from 'App/Models/Record'
import Station from 'App/Models/Station'

export default class RecordsController {
  public async store({ request, response }) {
    try {
      const data = request.all()

      const station = await Station.findByOrFail('secure_id', data.station_id)

      const record = new Record()

      record.merge({ ...data, station_id: station.id })

      await record.save()

      return response.status(200).json(record)
    } catch (e) {
      console.log(e)
    }
  }

  public async show({ request, response }) {
    // const data = request.all()

    const station = await Station.findByOrFail('secure_id', request.params().station_secure_id)
    const records = await Record.query().where('station_id', station.id).limit(20)

    //.whereBetween('create_at', ['start_date', 'end_date'])

    response.status(200).json(records)
  }

  public async showOne({ request, response }) {
    // const data = request.all()
    try {
      const station = await Station.findByOrFail('secure_id', request.params().station_secure_id)

      const records = await Record.query()
        .where('station_id', station.id)
        .orderBy('created_at', 'desc')
        .first()
      //.whereBetween('create_at', ['start_date', 'end_date'])

      response.status(200).json(records)
    } catch (e) {
      response.status(500).json({ error: 'Houve um erro' })
    }
  }
}
