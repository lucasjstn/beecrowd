#include<stdio.h>
#include<stdlib.h>

struct node {
	int data;
	struct node* link;
};

void print_data(struct node* head) {
	if(head == NULL) {
		printf("Linked list is empty");
	}

	struct node *ptr = NULL;

	ptr = head;

	while(ptr != NULL) {
		printf("%d ", ptr->data);
		ptr = ptr->link;
	}
};

void count_data(struct node *head){
	int count = 0;
	if(head == NULL) {
		printf("The list is empty.");
	}

	struct node *ptr = NULL;
	ptr = head;
	while(ptr != NULL) {
		count++;
		ptr = ptr->link;
	}

	printf("There is %d elements", count);
}

struct node* add_at_end(struct node *head, int data) {
	struct node *ptr, *temp;
	ptr = head;

	temp = (struct node*)malloc(sizeof(struct node));

	temp->data = data;
	temp->link = NULL;

	while(ptr->link != NULL) {
		ptr =	ptr->link;
	}

	ptr->link = temp;
	return temp;
}

void add_beg(struct node* head, int d) {
	struct node *ptr = malloc(sizeof(struct node));

	ptr->data = d;
	ptr->link = NULL;

	ptr->link = head;
	head = ptr;
}

int main() {

	struct node *head = malloc(sizeof(struct node));

	head->data = 45;
	head->link = NULL;

	struct node *ptr = head;

	ptr = add_at_end(ptr, 98);
	ptr = add_at_end(ptr, 100);
	ptr = add_at_end(ptr, 101);
	ptr = add_at_end(ptr, 102);
	add_beg(head, 1);
	ptr = head;
	print_data(head);

	return 0;
}
