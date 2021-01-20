import React, { useCallback, useRef } from 'react';
import { FiMail, FiUser, FiPhoneForwarded } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../components/Input'
import Button from '../components/button'

import {Container, Content, AnimationContainer, Background} from '../styles/pages/Home'

export default function Home() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {}, []) 

  return (
    <>
      <Container>
        <Background />
        <Content>
          <AnimationContainer>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Envie seu pedido de orçamento aqui!</h1>
              <h1>Envie seu pedido de orçamento aqui!</h1>
              <h1>Envie seu pedido de orçamento aqui!</h1>

              <Input name="name" icon={FiUser} placeholder="Nome" />
              <Input name="lastname" icon={FiUser} placeholder="Sobrenome" />
              <Input name="fone" icon={FiPhoneForwarded} placeholder="Telefone" />
              <Input name="email" icon={FiMail} placeholder="E-mail" />

              <Button type="submit">Enviar</Button>
            </Form>
          </AnimationContainer>
        </Content>
      </Container>
    </>
  )
}
