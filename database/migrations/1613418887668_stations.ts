import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Stations extends BaseSchema {
  protected tableName = 'stations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('city')
      table.string('uf')
      table.string('secure_id')
      table.float('latitude')
      table.float('longitude')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
