class Customer < ApplicationRecord
    belongs_to :users
    has_many :orders
end
