{/* <Route path='/routines' element={
          <div>
            <ul>
              {
                routines.map(routine => {
                  return (
                    <li key={routine.id}>{routine.name}
                    <select
                      name='Activity'
                      value={activity}
                      onChange={(ev)=> setActivity(ev.target.value)}>
                      <option value='any'>Add Activity</option>
                      {
                        activities.map(activity => {
                          return (
                            <option key={activity.id}>{activity.name}</option>
                          )
                        })
                      }
                    </select>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        } /> */}