<template>
    <button class="py-2 px-2 font-bold rounded-md border hover:bg-brown-light hover:text-brown-dark " 
    :class="[buttonColor, textColor, borderColor]" 
    :type="buttonType"> {{ buttonLabel }}
    </button>
</template>
<script>
export default {
      name: 'BaseButton',
    props: ['buttonLabel','buttonColor','textColor','borderColor','buttonType'],
}
</script>

