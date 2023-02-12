import * as C from './styles';

type Props = {
    title: string
}

export const Title = ({ title }: Props) => {
    return (
        <C.Title>{title}</C.Title>
    )
}
