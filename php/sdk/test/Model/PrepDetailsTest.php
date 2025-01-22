<?php
/**
 * PrepDetailsTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillment\inbound\v0\PrepDetails;

/**
 * PrepDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Preparation instructions and who is responsible for the preparation.
 * @package     OpenAPI\Client
 */
class PrepDetailsTest extends TestCase
{

    private PrepDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PrepDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PrepDetails"
     */
    public function testPrepDetails()
    {
        $this->assertInstanceOf(PrepDetails::class, $this->model);
    }

    /**
     * Test attribute "prep_instruction"
     */
    public function testPropertyPrepInstruction()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\PrepInstruction();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPrepInstruction($testValue);
        $this->assertEquals($testValue, $this->model->getPrepInstruction());
    }

    /**
     * Test attribute "prep_owner"
     */
    public function testPropertyPrepOwner()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\PrepOwner();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPrepOwner($testValue);
        $this->assertEquals($testValue, $this->model->getPrepOwner());
    }
}
