class Order < ApplicationRecord
    belongs_to :customer

    has_many :order_lines

    has_one  :order_status
end
