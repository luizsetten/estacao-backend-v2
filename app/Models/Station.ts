import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

import Record from './Record'

export default class Station extends BaseModel {
  public static table = 'stations'

  @hasMany(() => Record)
  public records: HasMany<typeof Record>

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public city: string

  @column()
  public uf: string

  @column()
  public latitude: number

  @column()
  public longitude: string

  @column()
  public secure_id: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
