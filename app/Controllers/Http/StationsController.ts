// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Station from '../../Models/Station'
import { v4 as uuidv4 } from 'uuid'

export default class StationsController {
  public async index({ request, response }) {
    const stations = await Station.query()

    const data = stations.map((station) => {
      return {
        name: station.name,
        city: station.city,
        uf: station.uf,
        latitude: station.latitude,
        longitude: station.longitude,
        secure_id: station.secure_id,
      }
    })

    return response.status(200).json(data)
  }

  public async store({ request, response }) {
    const data = request.all()

    const station = new Station()

    station.merge({ ...data, secure_id: uuidv4() })

    await station.save()

    const stations = await Station.query()

    return response.status(200).json(stations)
  }
}
