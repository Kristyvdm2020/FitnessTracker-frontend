// const [selectedActivityId, setSelectedActivityId] = useState('');
//     const [count, setCount] = useState('');
//     const [duration, setDuration] = useState('');

  //   const addActivity = async(ev) => {
  //     ev.preventDefault();
  //     const activity = await attachActivityToRoutine(id, selectedActivityId, count, duration); 
  //     //need to figure out how to refresh the list and make it appear on the page....
  //     //it does add the activity to the page.
  // }

{/* <Route path='/routines' element={
           <h3>Add an Activity:</h3>
                <div>
                    <form onSubmit={ addActivity }>
                        <select
                            name='Activity'
                            value={selectedActivityId}
                            onChange={(ev) => {
                                console.log(ev.target.value)
                                setSelectedActivityId(Number(ev.target.value))
                            }}>
                            <option value='any'></option>
                            {
                                activities.map(activity => {
                                    return (
                                        <option value={activity.id} key={activity.id}>{activity.name}</option>
                                    )
                                })
                            }
                        </select>
                        <input
                            placeholder="count"
                            value={count}
                            onChange={(ev) => setCount(Number(ev.target.value))}
                        />
                        <input
                            placeholder="duration"
                            value={duration}
                            onChange={(ev) => setDuration(Number(ev.target.value))}
                        />

                        <button disabled={selectedActivityId === '' || count === '' || duration === ''}>
                            Add Activity</button>
                    </form>
                </div>
        } /> */}