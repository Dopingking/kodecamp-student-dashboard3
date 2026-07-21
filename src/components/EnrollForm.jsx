import { useState, useRef, useEffect } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const EnrollForm = ({ tracks, onEnroll }) => {
  const firstNameRef = useRef(null);
  const emailRef = useRef(null);
  const activeRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [track, setTrack] = useState(tracks[0] || "");
  const [score, setScore] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    firstNameRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!firstName.trim())
      newErrors.firstName = "First name is required";

    if (!lastName.trim())
      newErrors.lastName = "Last name is required";

    const scoreNum = Number(score);

    if (
      Number.isNaN(scoreNum) ||
      scoreNum < 0 ||
      scoreNum > 100
    ) {
      newErrors.score = "Score must be between 0 and 100";
    }

    const email = emailRef.current?.value?.trim() || "";

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    const newStudent = {
      id: crypto.randomUUID
        ? crypto.randomUUID()
        : Date.now().toString(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email,
      track,
      score: scoreNum,
      isActive: activeRef.current?.checked ?? false,
      avatar: `https://i.pravatar.cc/150?img=${
        Math.floor(Math.random() * 70) + 1
      }`,
    };

    onEnroll(newStudent);

    setFirstName("");
    setLastName("");
    setTrack(tracks[0] || "");
    setScore("");
    setErrors({});

    if (emailRef.current) emailRef.current.value = "";
    if (activeRef.current) activeRef.current.checked = false;

    firstNameRef.current?.focus();
  };

  const previewName =
    firstName || lastName
      ? `${firstName} ${lastName}`.trim()
      : "No name";

  const previewTrack = track || "No track";
  const previewScore = score || "?";

  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        borderRadius: 3,
        mt: 3,
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
      >
        Enroll New Student
      </Typography>
            <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="First Name"
            inputRef={firstNameRef}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <FormControl fullWidth>
            <InputLabel>Track</InputLabel>
            <Select
              value={track}
              label="Track"
              onChange={(e) => setTrack(e.target.value)}
            >
              {tracks.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            type="number"
            label="Score"
            inputProps={{
              min: 0,
              max: 100,
            }}
            value={score}
            onChange={(e) => setScore(e.target.value)}
            error={!!errors.score}
            helperText={errors.score}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            type="email"
            label="Email"
            inputRef={emailRef}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <FormControlLabel
            control={
              <Checkbox
                inputRef={activeRef}
              />
            }
            label="Active Student"
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              bgcolor: "#f8fafc",
            }}
          >
            <Typography fontWeight="bold">
              Preview
            </Typography>

            <Typography>
              {previewName}
            </Typography>

            <Typography>
              {previewTrack}
            </Typography>

            <Typography>
              Score: {previewScore}
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleSubmit}
            sx={{
              py: 1.5,
              mt: 1,
            }}
          >
            Enroll Student
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EnrollForm;