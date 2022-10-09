//
import {
  useState
} from "react"
import {
  Card,
  Paper
} from "@mui/material"
export default function Loader() {
  return (
    <div className="loader__card">
    <div className="loader__card--paper">
    <p className="loader__card--paper--tex">
Loading...
    </p>
    </div>
    </div>
  )
}