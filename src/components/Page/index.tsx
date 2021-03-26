import React from "react";
import { Card } from 'antd'
import './style.css'

const Page = ({ children }: any) => {
  return (
    <Card className="page-container">{children || null}</Card>
  )
}

export default Page