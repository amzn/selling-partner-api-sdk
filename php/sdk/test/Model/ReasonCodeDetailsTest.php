<?php
/**
 * ReasonCodeDetailsTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\ReasonCodeDetails;

/**
 * ReasonCodeDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description A return reason code, a description, and an optional description translation.
 * @package     SpApi
 */
class ReasonCodeDetailsTest extends TestCase
{

    private ReasonCodeDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ReasonCodeDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ReasonCodeDetails"
     */
    public function testReasonCodeDetails()
    {
        $this->assertInstanceOf(ReasonCodeDetails::class, $this->model);
    }

    /**
     * Test attribute "return_reason_code"
     */
    public function testPropertyReturnReasonCode()
    {
        $testValue = 'test';
        
        $this->model->setReturnReasonCode($testValue);
        $this->assertEquals($testValue, $this->model->getReturnReasonCode());
    }

    /**
     * Test attribute "description"
     */
    public function testPropertyDescription()
    {
        $testValue = 'test';
        
        $this->model->setDescription($testValue);
        $this->assertEquals($testValue, $this->model->getDescription());
    }

    /**
     * Test attribute "translated_description"
     */
    public function testPropertyTranslatedDescription()
    {
        $testValue = 'test';
        
        $this->model->setTranslatedDescription($testValue);
        $this->assertEquals($testValue, $this->model->getTranslatedDescription());
    }
}
