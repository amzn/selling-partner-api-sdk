<?php
/**
 * LengthTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\merchantFulfillment\Length;

/**
 * LengthTest Class Doc Comment
 *
 * @category    Class
 * @description The length.
 * @package     OpenAPI\Client
 */
class LengthTest extends TestCase
{

    private Length $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Length();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Length"
     */
    public function testLength()
    {
        $this->assertInstanceOf(Length::class, $this->model);
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 1;
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }

    /**
     * Test attribute "unit"
     */
    public function testPropertyUnit()
    {
        $enumInstance = new \OpenAPI\Client\Model\merchantFulfillment\UnitOfLength();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setUnit($testValue);
        $this->assertEquals($testValue, $this->model->getUnit());
    }
}
