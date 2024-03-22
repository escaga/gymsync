<template>
  <div style="height: auto; width: 100%">
    <VCalendar
      :attributes="attrs"
      view="weekly"
      expanded
      title-position="left"
      is-dark="true"
      @did-move="handleWeekChange"
      @dayclick="dayClickHandle"
      ref="calendarRef"
    >
      <template #footer>
        <div class="calendarFooter">
          <div style="margin-bottom: 8px">
            <span v-if="weekSessions.length > 0"
              >Training Sessions ({{ weekSessions.length }})</span
            >
          </div>
          <div v-for="session in weekSessions" :key="session.date">
            <div class="sessionContainer">
              <div class="iconContainer">
                <div class="icon">
                  <font-awesome-icon :icon="faDumbbell" />
                </div>
              </div>
              <div class="sessionInfo">
                <strong>{{ session.gym }}</strong>
                <span
                  >{{ getWeekdayName(session.date) }},
                  {{ session.startTime }}-{{ session.endTime }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </VCalendar>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getWeekdayName } from "../utils/dates";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

// const props = defineProps(["test"]);
// const emit = defineEmits(["callback"]);

const calendarRef = ref(new Date());
const treinos = [
  [],
  [],
  [],
  [
    [],
    [],
    [],
    [
      {
        date: new Date("2024-03-17"),
        gym: "Elite Studio",
        startTime: "16:00",
        endTime: "17:00",
      },
    ],
    [
      {
        date: new Date("2024-03-19"),
        gym: "Elite Studio",
        startTime: "11:00",
        endTime: "12:00",
      },
      {
        date: new Date("2024-03-21"),
        gym: "Elite Studio",
        startTime: "13:00",
        endTime: "14:00",
      },
    ],
  ],
];

const weekSessions = ref([]);

const attrs = ref([
  {
    key: "today",
    dot: {
      color: "blue",
      fillMode: "light",
    },
    dates: [],
  },
]);

const handleWeekChange = (e, dateInfo) => {
  let novasDatas = [];
  console.log("e", e);
  if (e) {
    const month = e[0].month;
    const week = e[0].week;
    weekSessions.value = treinos?.[month]?.[week] || [];
    weekSessions.value.forEach((session) => {
      novasDatas.push(session.date);
    });
  } else {
    console.log(dateInfo, treinos);
    weekSessions.value = treinos?.[dateInfo.month]?.[dateInfo.week] || [];
    weekSessions.value.forEach((session) => {
      novasDatas.push(session.date);
    });
  }
  attrs.value[0].dates = novasDatas;
};

const dayClickHandle = (e) => {
  console.log(e.day, e.month, e.year);
};

const getCurrentDateInfo = () => {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const pastDaysOfMonth = today.getDate();
  const weekNumber = Math.ceil(
    (pastDaysOfMonth + firstDayOfMonth.getDay()) / 7
  );

  const currentMonthNumber = today.getMonth() + 1;

  return {
    month: currentMonthNumber,
    week: weekNumber,
  };
};

onMounted(() => {
  handleWeekChange(null, getCurrentDateInfo());
});
</script>

<style>
.iconContainer {
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
}
.sessionContainer {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.sessionInfo {
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.icon {
  width: 36px;
  height: 36px;
  background: cyan;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-radius: 10px;
}
.calendarFooter {
  padding: 0px 16px;
}
</style>
