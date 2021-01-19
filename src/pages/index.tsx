import React, { useCallback, useRef } from 'react';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../components/Input'
import Button from '../components/Button'

import {Container, Content, AnimationContainer, Background} from '../styles/pages/Home'

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

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
              <h1>Site Guino!</h1>

              <Input name="name" icon={FiUser} placeholder="Nome" />
              <Input name="email" icon={FiMail} placeholder="E-mail" />
              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
              />
              <Button type="submit">Enviar</Button>
            </Form>
          </AnimationContainer>
        </Content>
      </Container>
    </>
  )
}
