import _ from 'lodash'

export default (profiles, user) => {
  const rejectMe = _.reject(profiles, profile => profile.uid === user.uid)


return rejectMe
}