import { MapPinLine } from 'phosphor-react'
import {
  AddressContainer,
  FormContainer,
  InfoContainer,
  MainContainer,
} from './style'

export function Checkout() {
  return (
    <MainContainer>
      <InfoContainer>
        <h2>Complete seu pedido</h2>

        <AddressContainer>
          <div>
            <MapPinLine size={22} />
            <p>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </p>
          </div>

          <FormContainer action="">
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Opcional" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </FormContainer>
        </AddressContainer>

        <div>
          <h3>Pagamento</h3>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </InfoContainer>

      <section>
        <h2>Cafés selecionados</h2>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Total de itens</td>
                <td>R$ 29,70</td>
              </tr>
              <tr>
                <td>Entrega</td>
                <td>R$ 3,50</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>R$ 33,20</td>
              </tr>
            </tbody>
          </table>

          <button>confirmar pedido</button>
        </div>
      </section>
    </MainContainer>
  )
}
