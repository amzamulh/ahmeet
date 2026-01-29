"use client";
import { useState } from "react";
import { Button } from "./components/atoms/Button";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "./components/molecules/Card";
import { Modal } from "./components/molecules/Modal/Modal";
import { Tooltip } from "./components/atoms/Tooltip";
import { Dropdown } from "./components/molecules/Dropdown/Dropdown";
import { DropdownItem } from "./components/atoms/DropdownItem";
import { Avatar } from "./components/atoms/Avatar/Avatar";
import { AvatarGroup } from "./components/molecules/AvatarGroup/AvatarGroup";
import { Alert } from "./components/molecules/Alert/Alert";
import { Icon } from "./components/atoms/Icon/Icon";
import { Toast } from "./components/molecules/Toast/Toast";
const list = [
  { label: "lebel one" },
  { label: "lebel two" },
  { label: "lebel three" },
  { label: "lebel four" },
];
const userList = [
  {
    id: "1",
    name: "amzam",
    src: "https://gravatar.com/avatar/64e05386f7aa263fa24ea036e193902d?s=400&d=mp&r=x",
  },
  {
    id: "2",
    name: "Mehnet",
    src: "https://gravatar.com/avatar/64e05386f7aa263fa24ea036e193902d?s=400&d=mp&r=x",
  },
];
export default function HomePage() {
  const [open, setOpen] = useState(false);
  return (
    <section className="flex flex-col bg-[var-(--color-bg)] text-[var(--color-text)] items-center justify-center h-full space-y-6">
      <Card size="xl">
        <CardHeader>
          <h1 className="text-2xl font-bold"> Welcome to Ahmeet</h1>
        </CardHeader>
        <CardBody>
          <article>
            Enterprise-grade real-time video conferencing & collaboration.
          </article>

          <div className="grid mt-8 grid-cols-12 grid-rows-3 gap-4">
            <Icon name="mic" size="xxl" ariaLabel="mic" />
            <Icon name="mic-off" size="xl" ariaLabel="Warning" />
            <Icon name="camera" size="lg" ariaLabel="Warning" />
            <Icon name="camera-off" size="md" ariaLabel="Warning" />
            <Icon name="volume" size="sm" ariaLabel="Warning" />
            <Icon name="volume-off" size="xs" ariaLabel="Warning" />
            <Icon name="screen-share" size="md" ariaLabel="Warning" />
            <Icon name="screen-share-off" size="md" ariaLabel="Warning" />
            <Icon name="call" size="md" ariaLabel="Warning" />
            <Icon name="play" size="md" ariaLabel="Warning" />
            <Icon name="pause" size="md" ariaLabel="Warning" />
            <Icon name="stop" size="md" ariaLabel="Warning" />
            <Icon name="record" size="md" ariaLabel="Warning" />
            <Icon name="users" size="md" ariaLabel="Warning" />
            <Icon name="user" size="md" ariaLabel="Warning" />
            <Icon name="user-add" size="md" ariaLabel="Warning" />
            <Icon name="hand" size="md" ariaLabel="Warning" />
            <Icon name="chat" size="md" ariaLabel="Warning" />
            <Icon name="chats" size="md" ariaLabel="Warning" />
            <Icon name="send" size="md" ariaLabel="Warning" />
            <Icon name="emoji" size="md" ariaLabel="Warning" />
            <Icon name="attach" size="md" ariaLabel="Warning" />
            <Icon name="chevron-down" size="md" ariaLabel="Warning" />
            <Icon name="chevron-up" size="md" ariaLabel="Warning" />
            <Icon name="chevron-left" size="md" ariaLabel="Warning" />
            <Icon name="chevron-right" size="md" ariaLabel="Warning" />
            <Icon name="menu" size="md" ariaLabel="Warning" />
            <Icon name="arrow-left" size="md" ariaLabel="Warning" />
            <Icon name="arrow-right" size="md" ariaLabel="Warning" />

            <Icon name="plus" size="md" ariaLabel="Warning" />
            <Icon name="minus" size="md" ariaLabel="Warning" />
            <Icon name="check" size="md" ariaLabel="Warning" />
            <Icon name="close" size="md" ariaLabel="Warning" />
            <Icon name="edit" size="md" ariaLabel="Warning" />
            <Icon name="delete" size="md" ariaLabel="Warning" />
            <Icon name="settings" size="md" ariaLabel="Warning" />
            <Icon name="search" size="md" ariaLabel="Warning" />
            <Icon name="filter" size="md" ariaLabel="Warning" />
            <Icon name="bell" size="md" ariaLabel="Warning" />
            <Icon name="logout" size="md" ariaLabel="Warning" />
            <Icon name="login" size="md" ariaLabel="Warning" />
            <Icon name="refresh" size="md" ariaLabel="Warning" />
            <Icon name="info" size="md" ariaLabel="Warning" />
            <Icon name="warning" size="md" ariaLabel="Warning" />
            <Icon name="success" size="md" ariaLabel="Warning" />
            <Icon name="error" size="md" ariaLabel="Warning" />
            <Icon name="loading" size="md" ariaLabel="Warning" />
            <Icon name="eye" size="md" ariaLabel="Warning" />
            <Icon name="eye-off" size="md" ariaLabel="Warning" />
            <Icon name="copy" size="md" ariaLabel="Warning" />
            <Icon name="link" size="md" ariaLabel="Warning" />
            <Icon name="calendar" size="md" ariaLabel="Warning" />
            <Icon name="clock" size="md" ariaLabel="Warning" />
          </div>
        </CardBody>
        <CardFooter>
          <Button onClick={() => setOpen(true)} size="md">
            Action
          </Button>
          <Tooltip content="Button Setup">
            <Button size="md" color="secondary">
              Setup
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Leave Meeting"
        footer={
          <>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button color="danger">Leave</Button>
          </>
        }
      >
        Are you sure you want to leave the meeting?
      </Modal>

      <Dropdown label="Menu Items" items={list}>
        <DropdownItem>Item One</DropdownItem>
      </Dropdown>

      <Alert variant="default" title="Info">
        Are you sure you want to leave the meeting?
      </Alert>
      <Alert variant="success" title="Info">
        Are you sure you want to leave the meeting?
      </Alert>
      <Alert variant="info" title="Info">
        Are you sure you want to leave the meeting?
      </Alert>
      <Alert variant="warning" title="Info">
        Are you sure you want to leave the meeting?
      </Alert>
      <Alert variant="danger" title="Info">
        Are you sure you want to leave the meeting?
      </Alert>

      <Toast variant="default" title="Info">
        Are you sure you want to leave the meeting?
      </Toast>
      <Toast variant="success" title="Info">
        Are you sure you want to leave the meeting?
      </Toast>
      <Toast variant="info" title="Info">
        Are you sure you want to leave the meeting?
      </Toast>
      <Toast variant="warning" title="Info">
        Are you sure you want to leave the meeting?
      </Toast>
      <Toast variant="danger" title="Info">
        Are you sure you want to leave the meeting?
      </Toast>
    </section>
  );
}
