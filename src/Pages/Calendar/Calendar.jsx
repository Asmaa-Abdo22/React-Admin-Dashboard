import React, { useState, useRef } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const Calendar = () => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const theme = useTheme();
  const calendarRef = useRef();

  // Toggle weekends
  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  // Track events
  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  // Open Add Dialog
  const handleAddEvent = () => {
    setOpenAddDialog(true);
  };

  // Close Add Dialog
  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
    setNewEventTitle("");
    setNewEventDate("");
  };

  // Save new event
  const handleSaveEvent = () => {
    if (newEventTitle && newEventDate) {
      const calendarApi = calendarRef.current?.getApi();
      calendarApi?.addEvent({
        id: createEventId(),
        title: newEventTitle,
        start: newEventDate,
        allDay: true,
      });
      handleCloseAddDialog();
    } else {
      alert("Please fill in all fields!");
    }
  };

  // Handle delete click
  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setOpenDeleteDialog(true);
  };

  // Confirm delete
  const handleConfirmDelete = () => {
    selectedEvent.remove();
    setSelectedEvent(null);
    setOpenDeleteDialog(false);
  };

  // Cancel delete
  const handleCancelDelete = () => {
    setSelectedEvent(null);
    setOpenDeleteDialog(false);
  };

  return (
    <Box sx={{ display: "flex", p: 3, gap: 3 }}>
      {/* Sidebar */}
      <Card
        sx={{
          width: 300,
          height: "80vh",
          backgroundColor: theme.palette.background.paper,
          borderRadius: 3,
          boxShadow: theme.shadows[3],
          p: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            mb={2}
            color={theme.palette.secondary.main}
            fontWeight={600}
          >
            Calendar Menu
          </Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddEvent}
            sx={{ mb: 2, textTransform: "none" }}
          >
            + Add Event
          </Button>

          <Typography
            variant="body2"
            mb={1}
            color={theme.palette.text.secondary}
          >
            - Click event to delete it
            <br />- Use the button above to add new events
          </Typography>

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            control={
              <Checkbox
                checked={weekendsVisible}
                onChange={handleWeekendsToggle}
                sx={{
                  color: theme.palette.primary.main,
                  "&.Mui-checked": { color: theme.palette.primary.main },
                }}
              />
            }
            label="Show Weekends"
          />

          <Divider sx={{ my: 2 }} />

          <Typography
            variant="subtitle1"
            color={theme.palette.text.primary}
            fontWeight={600}
            mb={1}
          >
            All Events ({currentEvents.length})
          </Typography>

          <List dense sx={{ maxHeight: 280, overflowY: "auto" }}>
            {currentEvents.map((event) => (
              <ListItem key={event.id}>
                <ListItemText
                  primary={event.title}
                  secondary={formatDate(event.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Calendar */}
      <Card
        sx={{
          flex: 1,
          backgroundColor: theme.palette.background.paper,
          borderRadius: 3,
          boxShadow: theme.shadows[3],
          p: 2,
        }}
      >
        <CardContent>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={weekendsVisible}
            initialEvents={INITIAL_EVENTS}
            eventClick={handleEventClick}
            eventsSet={handleEvents}
          />
        </CardContent>
      </Card>

      {/* Add Event Dialog */}
      <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
        >
          <TextField
            label="Event Title"
            variant="outlined"
            fullWidth
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
          />
          <TextField
            label="Event Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value={newEventDate}
            onChange={(e) => setNewEventDate(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleSaveEvent} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Event Dialog */}
      <Dialog open={openDeleteDialog} onClose={handleCancelDelete}>
        <DialogTitle>Delete Event</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete{" "}
            <strong>{selectedEvent?.title}</strong>?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="inherit">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmDelete}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

// Render event content
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b> &nbsp;
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default Calendar;
