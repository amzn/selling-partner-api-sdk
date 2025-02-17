<?php
/**
 * ShippingConstraintsTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\orders\v0\ShippingConstraints;

/**
 * ShippingConstraintsTest Class Doc Comment
 *
 * @category    Class
 * @description Delivery constraints applicable to this order.
 * @package     SpApi
 */
class ShippingConstraintsTest extends TestCase
{

    private ShippingConstraints $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShippingConstraints();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShippingConstraints"
     */
    public function testShippingConstraints()
    {
        $this->assertInstanceOf(ShippingConstraints::class, $this->model);
    }

    /**
     * Test attribute "pallet_delivery"
     */
    public function testPropertyPalletDelivery()
    {
        $enumInstance = new \SpApi\Model\orders\v0\ConstraintType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPalletDelivery($testValue);
        $this->assertEquals($testValue, $this->model->getPalletDelivery());
    }

    /**
     * Test attribute "signature_confirmation"
     */
    public function testPropertySignatureConfirmation()
    {
        $enumInstance = new \SpApi\Model\orders\v0\ConstraintType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setSignatureConfirmation($testValue);
        $this->assertEquals($testValue, $this->model->getSignatureConfirmation());
    }

    /**
     * Test attribute "recipient_identity_verification"
     */
    public function testPropertyRecipientIdentityVerification()
    {
        $enumInstance = new \SpApi\Model\orders\v0\ConstraintType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setRecipientIdentityVerification($testValue);
        $this->assertEquals($testValue, $this->model->getRecipientIdentityVerification());
    }

    /**
     * Test attribute "recipient_age_verification"
     */
    public function testPropertyRecipientAgeVerification()
    {
        $enumInstance = new \SpApi\Model\orders\v0\ConstraintType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setRecipientAgeVerification($testValue);
        $this->assertEquals($testValue, $this->model->getRecipientAgeVerification());
    }
}
