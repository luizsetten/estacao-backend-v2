// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Record from 'App/Models/Record'
import Station from 'App/Models/Station'

export default class RecordsController {
  public async store({ req, res }) {
    const station = await Station.findByOrFail('secure_id', req.params.secure_id)

    const data = req.all()

    const record = new Record()

    record.merge({ ...data, station_id: station.id })

    await record.save()

    return res.status(200).json(record)
  }

  public async show({ req, res }) {
    const data = req.all()

    const station = await Station.findByOrFail('secure_id', req.params.secure_id)

    const records = await Record.query().where('station_id', station.id)
    //.whereBetween('create_at', ['start_date', 'end_date'])

    res.status(200).json(records)
  }
}
