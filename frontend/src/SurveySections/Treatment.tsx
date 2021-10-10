import React from 'react';
const Treatment = (props: any) => {
    const setData = props.dataCallback;
    const data = props.data;
    const onValueSelected = (event: any) => {
        const { name, value } = event.target;
        const newData = { ...data };
        newData[name] = value;
        setData(newData);
    }
    return (
        <>
            <h2>How Mental Illnesses Are Treated</h2>
            <form>
                <p>Are you currently being treated for a common mental disorder (anxiety, depressive, or panic disorder)?</p>
                <input type="radio" id="treatment_yes" name="treatment" value="Yes" onChange={onValueSelected} />
                <label htmlFor="treatment_yes">Yes</label><br />
                <input type="radio" id="treatment_no" name="treatment" value="No" onChange={onValueSelected} />
                <label htmlFor="treatment_no">No, I have never been treated</label><br />
                <input type="radio" id="treatment_no_past" name="treatment" value="Past" onChange={onValueSelected} />
                <label htmlFor="treatment_no_past">No, but I have been treated in the past</label>

                <p>How important are the following factors in deciding not to seek help?</p>

                <p>You are not sure available treatments are very effective.</p>
                <input type="radio" id="avail_unimportant" name="avail" value="Unimportant" onChange={onValueSelected} />
                <label htmlFor="avail_unimportant">Unimportant</label><br />
                <input type="radio" id="avail_little" name="avail" value="Little" onChange={onValueSelected} />
                <label htmlFor="avail_little">Of little importance</label><br />
                <input type="radio" id="avail_moderate" name="avail" value="Moderate" onChange={onValueSelected} />
                <label htmlFor="avail_moderate">Moderately important</label><br />
                <input type="radio" id="avail_important" name="avail" value="Important" onChange={onValueSelected} />
                <label htmlFor="avail_important">Important</label><br />
                <input type="radio" id="avail_very" name="avail" value="Very" onChange={onValueSelected} />
                <label htmlFor="avail_very">Very important</label><br />

                <p>You would want to handle the problem on your own.</p>
                <input type="radio" id="handle_unimportant" name="handle" value="Unimportant" onChange={onValueSelected} />
                <label htmlFor="handle_unimportant">Unimportant</label><br />
                <input type="radio" id="handle_little" name="handle" value="Little" onChange={onValueSelected} />
                <label htmlFor="handle_little">Of little importance</label><br />
                <input type="radio" id="handle_moderate" name="handle" value="Moderate" onChange={onValueSelected} />
                <label htmlFor="handle_moderate">Moderately important</label><br />
                <input type="radio" id="handle_important" name="handle" value="Important" onChange={onValueSelected} />
                <label htmlFor="handle_important">Important</label><br />
                <input type="radio" id="handle_very" name="handle" value="Very" onChange={onValueSelected} />
                <label htmlFor="handle_very">Very important</label><br />

                <p>You would be too embarrassed.</p>
                <input type="radio" id="embarrassed_unimportant" name="embarrassed" value="Unimportant" onChange={onValueSelected} />
                <label htmlFor="embarrassed_unimportant">Unimportant</label><br />
                <input type="radio" id="embarrassed_little" name="embarrassed" value="Little" onChange={onValueSelected} />
                <label htmlFor="embarrassed_little">Of little importance</label><br />
                <input type="radio" id="embarrassed_moderate" name="embarrassed" value="Moderate" onChange={onValueSelected} />
                <label htmlFor="embarrassed_moderate">Moderately important</label><br />
                <input type="radio" id="embarrassed_important" name="embarrassed" value="Important" onChange={onValueSelected} />
                <label htmlFor="embarrassed_important">Important</label><br />
                <input type="radio" id="embarrassed_very" name="embarrassed" value="Very" onChange={onValueSelected} />
                <label htmlFor="embarrassed_very">Very important</label><br />

                <p>You would talk to friends or relatives instead.</p>
                <input type="radio" id="friends_unimportant" name="friends" value="Unimportant" onChange={onValueSelected} />
                <label htmlFor="friends_unimportant">Unimportant</label><br />
                <input type="radio" id="friends_unimportant" name="friends" value="Little" onChange={onValueSelected} />
                <label htmlFor="friends_unimportant">Of little importance</label><br />
                <input type="radio" id="friends_unimportant" name="friends" value="Moderate" onChange={onValueSelected} />
                <label htmlFor="friends_unimportant">Moderately important</label><br />
                <input type="radio" id="friends_unimportant" name="friends" value="Important" onChange={onValueSelected} />
                <label htmlFor="friends_unimportant">Important</label><br />
                <input type="radio" id="friends_unimportant" name="friends" value="Very" onChange={onValueSelected} />
                <label htmlFor="friends_unimportant">Very important</label><br />

                <p>You think it costs too much money.</p>
                <input type="radio" id="money_unimportant" name="money" value="Unimportant" onChange={onValueSelected} />
                <label htmlFor="money_unimportant">Unimportant</label><br />
                <input type="radio" id="money_little" name="money" value="Little" onChange={onValueSelected} />
                <label htmlFor="money_little">Of little importance</label><br />
                <input type="radio" id="money_moderate" name="money" value="Moderate" onChange={onValueSelected} />
                <label htmlFor="money_moderate">Moderately important</label><br />
                <input type="radio" id="money_important" name="money" value="Important" onChange={onValueSelected} />
                <label htmlFor="money_important">Important</label><br />
                <input type="radio" id="money_very" name="money" value="Very" onChange={onValueSelected} />
                <label htmlFor="money_very">Very important</label><br />

                <p>You are unsure of where to go or who to see.</p>
                <input type="radio" id="where_unimportant" name="where" value="Unimportant" onChange={onValueSelected} />
                <label htmlFor="where_unimportant">Unimportant</label><br />
                <input type="radio" id="where_little" name="where" value="Little" onChange={onValueSelected} />
                <label htmlFor="where_little">Of little importance</label><br />
                <input type="radio" id="where_moderate" name="where" value="Moderate" onChange={onValueSelected} />
                <label htmlFor="where_moderate">Moderately important</label><br />
                <input type="radio" id="where_important" name="where" value="Important" onChange={onValueSelected} />
                <label htmlFor="where_important">Important</label><br />
                <input type="radio" id="where_very" name="where" value="Very" onChange={onValueSelected} />
                <label htmlFor="where_very">Very important</label><br />

                <p>You anticipate problems with time, transportation, or scheduling.</p>
                <input type="radio" id="time_unimportant" name="time" value="Unimportant" onChange={onValueSelected} />
                <label htmlFor="time_unimportant">Unimportant</label><br />
                <input type="radio" id="time_little" name="time" value="Little" onChange={onValueSelected} />
                <label htmlFor="time_little">Of little importance</label><br />
                <input type="radio" id="time_moderate" name="time" value="Moderate" onChange={onValueSelected} />
                <label htmlFor="time_moderate">Moderately important</label><br />
                <input type="radio" id="time_important" name="time" value="Important" onChange={onValueSelected} />
                <label htmlFor="time_important">Important</label><br />
                <input type="radio" id="time_very" name="time" value="Very" onChange={onValueSelected} />
                <label htmlFor="time_very">Very important</label><br />

                <p>You are afraid it might harm your school or professional career.</p>
                <input type="radio" id="harm_unimportant" name="harm" value="Unimportant" onChange={onValueSelected} />
                <label htmlFor="harm_unimportant">Unimportant</label><br />
                <input type="radio" id="harm_little" name="harm" value="Little" onChange={onValueSelected} />
                <label htmlFor="harm_little">Of little importance</label><br />
                <input type="radio" id="harm_moderate" name="harm" value="Moderate" onChange={onValueSelected} />
                <label htmlFor="harm_moderate">Moderately important</label><br />
                <input type="radio" id="harm_important" name="harm" value="Important" onChange={onValueSelected} />
                <label htmlFor="harm_important">Important</label><br />
                <input type="radio" id="harm_very" name="harm" value="Very" onChange={onValueSelected} />
                <label htmlFor="harm_very">Very important</label><br />
            </form>
        </>
    );
}
export default Treatment;
