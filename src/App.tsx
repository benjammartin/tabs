import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import styles from "./App.module.css";
import { Button } from "@/Button/Button";
import KebabIcon from "./Kebab";

function App() {
  return (
    <React.Fragment>
      <Tabs.Root defaultValue="1">
        <Tabs.List className={styles.list}>
          <Tabs.Trigger value="1" className={styles.trigger}>
            <span className={styles.label}>Tab example</span>
            <Button>
              <KebabIcon />
            </Button>
          </Tabs.Trigger>
          <Tabs.Trigger value="2" className={styles.trigger}>
            <span className={styles.label}>Tab example</span>
            <Button>
              <KebabIcon />
            </Button>
          </Tabs.Trigger>
          <Tabs.Trigger value="3" className={styles.trigger}>
            <span className={styles.label}>Tab example</span>
            <Button>
              <KebabIcon />
            </Button>
          </Tabs.Trigger>
          <Tabs.Trigger value="4" className={styles.trigger}>
            <span className={styles.label}>Tab example</span>
            <Button>
              <KebabIcon />
            </Button>
          </Tabs.Trigger>
          <Tabs.Trigger value="5" className={styles.trigger}>
            <span className={styles.label}>Tab example</span>
            <Button>
              <KebabIcon />
            </Button>
          </Tabs.Trigger>
          <Tabs.Trigger value="6" className={styles.trigger}>
            <span className={styles.label}>Tab example</span>
            <Button>
              <KebabIcon />
            </Button>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1" className={styles.content}>
          Tabs 1
        </Tabs.Content>
        <Tabs.Content value="2" className={styles.content}>
          Tabs 2
        </Tabs.Content>
        <Tabs.Content value="3" className={styles.content}>
          Tabs 3
        </Tabs.Content>
        <Tabs.Content value="4" className={styles.content}>
          Tabs 4
        </Tabs.Content>
        <Tabs.Content value="5" className={styles.content}>
          Tabs 5
        </Tabs.Content>
        <Tabs.Content value="6" className={styles.content}>
          Tabs 6
        </Tabs.Content>
      </Tabs.Root>
    </React.Fragment>
  );
}

export default App;
