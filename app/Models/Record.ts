import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Record extends BaseModel {
  public static table = 'records'

  @column()
  public stationId: number

  @column()
  public temperature: number

  @column()
  public pressure: number

  @column()
  public humidity: number

  @column()
  public rainfall: number

  @column()
  public windGust: number

  @column()
  public windDirection: string

  @column()
  public windSpeed: number

  @column()
  public solarIncidence: number

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
