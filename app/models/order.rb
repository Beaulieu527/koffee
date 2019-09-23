class Order < ApplicationRecord
    belongs_to :user
    has_many :order_lines
    has_many :products, through: :order_lines
    accepts_nested_attributes_for :products
end
