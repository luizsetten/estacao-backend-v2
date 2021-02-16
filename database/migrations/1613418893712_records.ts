import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Records extends BaseSchema {
  protected tableName = 'records'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.float('temp')
      table.float('pressure')
      table.float('humidity')
      table.float('rainfall')
      table.float('wind_gust')
      table.float('wind_speed')
      table.float('wind_direction')
      table.float('solar_incidence')
      table.integer('station_id').unsigned().references('id').inTable('stations')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
