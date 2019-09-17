class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :amount
      t.integer :customer_id
      t.integer :order_status_id

      t.timestamps
    end
  end
end
