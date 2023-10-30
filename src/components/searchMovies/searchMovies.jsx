
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import { StyledField, Btn } from './searchMovies.styled';

const formSchema = Yup.object().shape({
  query: Yup.string().required('This field is required!').trim().lowercase(),
})

export const SearchMovies = ({handleSubmit}) => {
    return (
<Formik
       initialValues={{
         query: '',
          }}
        validationSchema={formSchema} 
        
        onSubmit={(values, actions) => {
      handleSubmit(values.query)
     actions.resetForm();
        }}>  
        
<Form >
          <StyledField type="text" name="query"  placeholder="Search movie"
             />  
       <Btn type="submit" >
              <span >Search</span>
            </Btn>
 </Form>    
 </Formik> 
    )
}
