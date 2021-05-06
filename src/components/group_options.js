import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  group_options: {
    marginLeft: "400px",
  },
});

export default function RadioButtonsGroup(props) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState("Ceará");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" classes={{ root: classes.group_options }}>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Ceará" control={<Radio />} label="Ceará" />
        <FormControlLabel
          value="Rio de Janeiro"
          control={<Radio />}
          label="Rio de Janeiro"
        />
        <FormControlLabel
          value="São Paulo"
          control={<Radio />}
          label="São Paulo"
        />
        <FormControlLabel value="Goiás" control={<Radio />} label="Goiás" />
      </RadioGroup>
    </FormControl>
  );
}
