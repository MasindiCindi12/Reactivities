import { observer } from "mobx-react-lite";
import React, {  useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, FormField, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { Formik , Form , Field, ErrorMessage} from "formik";
import * as yup from 'yup';


export default observer( function ActivityForm(){
    //const navigate = useNavigate();
    const {activityStore} = useStore();
    const {loading, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id:string}>();

    const [activity, setActivity] = useState({
         id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue:''

    });
    const validationSchema = yup.object({
        title: yup.string().required("The activitty title is required"),    
        category:yup.string().required(),
        description: yup.string().required("The activitty title is required"),
        date: yup.string().required(),
        city: yup.string().required(),
        venue:yup.string().required(),
    })

   useEffect(() =>{
    if(id) loadActivity(id).then(activity => setActivity(activity!))
   }, [id, loadActivity]);
   

    // function handleSubmit(){
    //     if(activity.id.length === 0){
    //         let newActivity ={
    //             ...activity,
    //             id:uuid()
            
    //         };
    //       createActivity(newActivity).then(()=>navigate(`/activities/${newActivity.id}`))
    //     }
    //     else{
    //        updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
    //     } 
    // }

    // function handleInputChange(event: ChangeEvent<HTMLInputElement |HTMLTextAreaElement>)
    // {
    //     const {name, value} = event.target;
    //     setActivity({...activity,[name] : value});
    // }

    if(loadingInitial) return <LoadingComponent content="Loading Activity..."/>
    return(
        <Segment clearing>
            <Formik 
                validationSchema={validationSchema}
                enableReinitialize 
                initialValues={activity} 
                onSubmit={values => console.log(values)}>
                {({ handleSubmit})=>(
                <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                    <FormField>
                      <Field placeholder='Title'  name='title' />
                      <ErrorMessage name='title' 
                        render={error => <Label color='red' content={error} />} />
                    </FormField>
                    
                    <Field placeholder='Description'  name='description' />
                    <Field placeholder='Category'  name='category' />
                    <Field placeholder='Date' type='date'  name='date' />
                    <Field placeholder='City'  name='city' />
                    <Field placeholder='Venue'  name='venue' />
                    <Button loading={loading} floated="right" positive type="submit" content='Submit' />
                    <Button as={Link} to='/activities' floated="right" type="button" content='Cancel'/>
                </Form>

                )}

            </Formik>
        </Segment>
    )
})