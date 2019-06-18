class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.float :total
      t.boolean :is_bought

      t.timestamps null: false
    end
  end
end
