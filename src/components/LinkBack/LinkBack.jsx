import{LinkGoBack } from './LinkBack.styled'

export const LinkBack = ({locationLink}) => {
    return (
        <LinkGoBack  to={locationLink}>Go Back</LinkGoBack >
    )
}