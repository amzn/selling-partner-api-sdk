<?php
/**
 * MskuPrepDetailInputTest
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
use OpenAPI\Client\Model\fulfillmentinbound\MskuPrepDetailInput;

/**
 * MskuPrepDetailInputTest Class Doc Comment
 *
 * @category    Class
 * @description An MSKU and its related prep details.
 * @package     OpenAPI\Client
 */
class MskuPrepDetailInputTest extends TestCase
{

    private MskuPrepDetailInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new MskuPrepDetailInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "MskuPrepDetailInput"
     */
    public function testMskuPrepDetailInput()
    {
        $this->assertInstanceOf(MskuPrepDetailInput::class, $this->model);
    }

    /**
     * Test attribute "msku"
     */
    public function testPropertyMsku()
    {
        $testValue = 'test';
        
        $this->model->setMsku($testValue);
        $this->assertEquals($testValue, $this->model->getMsku());
    }

    /**
     * Test attribute "prep_category"
     */
    public function testPropertyPrepCategory()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillmentinbound\PrepCategory();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPrepCategory($testValue);
        $this->assertEquals($testValue, $this->model->getPrepCategory());
    }

    /**
     * Test attribute "prep_types"
     */
    public function testPropertyPrepTypes()
    {
        $testValue = [];
        
        $this->model->setPrepTypes($testValue);
        $this->assertEquals($testValue, $this->model->getPrepTypes());
    }
}
