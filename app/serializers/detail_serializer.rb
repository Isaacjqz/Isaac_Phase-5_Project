class DetailSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :questions
end
