class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.integer :category
      t.boolean :is_core
      t.boolean :requires_review
      t.date :started_on
      t.date :completed_on
      t.date :reviewed_on
      t.text :references

      t.timestamps
    end
  end
end
