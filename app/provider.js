"use client";
import { SessionProvider } from "next-auth/react"
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from './api/apiSlice';

export const AuthProvider = ({children})=>{
    return <SessionProvider>{children}</SessionProvider>;
}

export const ApiProviders = ({children}) => {
    return <ApiProvider api={apiSlice}>{children}</ApiProvider>
}