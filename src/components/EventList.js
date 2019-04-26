import React from "react";
import EventCard from "../components/EventCard";
import "../style/EventList.css";

const EventList = ({ events }) => {
  return (
    <div className="EventList">
      {events.map((event, index) => (
        <EventCard
          key={index}
          eventImage={events[index].imageurl}
          eventId={events[index].id}
          eventName={events[index].eventname}
          description={events[index].description}
          location={events[index].venue.town}
          date={events[index].date}
        />
      ))}
    </div>
  );
};

export default EventList;