import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Stations extends BaseSchema {
  protected tableName = 'stations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('name').unique().notNullable()
      table.string('city').notNullable()
      table.string('uf').notNullable()
      table.string('secure_id').notNullable()
      table.float('latitude')
      table.float('longitude')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
