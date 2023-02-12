import useCounter from '../../hooks/useCounter';
import { Counter } from '../Counter';
import { Title } from '../Title';
import * as C from './styles';

export const InfoArea = () => {
    
    const [day, hour, minute, second] = useCounter("Feb 15, 2023 00:00:00");

    return (
        <C.Container>
            <Title  title='Contagem Regressiva' />

            <C.CountContainer>
                <Counter title='Dias' number={day} />
                <Counter title='Horas' number={hour} />
                <Counter title='Minutos' number={minute} />
                <Counter title='Segundos' number={second} />
            </C.CountContainer>
            
        </C.Container>
    )
}