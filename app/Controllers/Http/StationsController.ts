// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Station from '../../Models/Station'

export default class StationsController {
  public async index({ req, res }) {
    const stations = await Station.query()

    return res.status(200).json({ data: stations })
  }

  public async store({ req, res }) {
    const data = req.all()

    const station = new Station()
    station.merge(data)

    console.log(data)

    await station.save()

    const stations = await Station.query()

    return res.status(200).json({ data: stations })
  }
}
