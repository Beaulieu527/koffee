class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :adress, :phone_number
  has_many :orders, serializer: OrderSerializer 
end
