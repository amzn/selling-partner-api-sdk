<?php
/**
 * AdditionalDetailsTest
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
use SpApi\Model\vendor\df\payments\v1\AdditionalDetails;

/**
 * AdditionalDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description A field where the selling party can provide additional information for tax-related or any other purposes.
 * @package     SpApi
 */
class AdditionalDetailsTest extends TestCase
{

    private AdditionalDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AdditionalDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AdditionalDetails"
     */
    public function testAdditionalDetails()
    {
        $this->assertInstanceOf(AdditionalDetails::class, $this->model);
    }

    /**
     * Test attribute "type"
     */
    public function testPropertyType()
    {
        $enumInstance = new AdditionalDetails();
        $allowedValues = $enumInstance->getTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setType($testValue);
        $this->assertEquals($testValue, $this->model->getType());
    }

    /**
     * Test attribute "detail"
     */
    public function testPropertyDetail()
    {
        $testValue = 'test';
        
        $this->model->setDetail($testValue);
        $this->assertEquals($testValue, $this->model->getDetail());
    }

    /**
     * Test attribute "language_code"
     */
    public function testPropertyLanguageCode()
    {
        $testValue = 'test';
        
        $this->model->setLanguageCode($testValue);
        $this->assertEquals($testValue, $this->model->getLanguageCode());
    }
}
