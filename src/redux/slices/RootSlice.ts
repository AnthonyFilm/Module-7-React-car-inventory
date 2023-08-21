import { createSlice } from "@reduxjs/toolkit";

/* fields from the Flask app
    id = db.Column(db.String, primary_key = True)
    vin = db.Column(db.String(20))
    make = db.Column(db.String(150))
    model = db.Column(db.String(100))
    year = db.Column(db.Integer)
    color = db.Column(db.String(100))
    description = db.Column(db.String(250), nullable=True

*/
const rootSlice = createSlice ( {
    name: "root",
    initialState: {
        vin: "VIN Number",
        make: "Make",
        model: "Model",
        year: "Year",
        color: "Color",
        description:"Description",
    },
    reducers: {
        chooseVin: (state, action) => {state.vin = action.payload},
        chooseMake: (state, action) => {state.make = action.payload},
        chooseModel: (state, action) => {state.model = action.payload},
        chooseYear: (state, action) => {state.year = action.payload},
        chooseColor: (state, action) => {state.color = action.payload},
        chooseDescription: (state, action) => {state.description = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const {chooseVin, chooseMake, chooseModel, chooseYear, chooseColor, chooseDescription} = rootSlice.actions
