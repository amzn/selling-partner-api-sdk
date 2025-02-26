<?php
/**
 * InboundOrderCreationDataTest
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
use SpApi\Model\awd\v2024_05_09\InboundOrderCreationData;

/**
 * InboundOrderCreationDataTest Class Doc Comment
 *
 * @category    Class
 * @description Payload for creating an inbound order.
 * @package     SpApi
 */
class InboundOrderCreationDataTest extends TestCase
{

    private InboundOrderCreationData $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundOrderCreationData();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundOrderCreationData"
     */
    public function testInboundOrderCreationData()
    {
        $this->assertInstanceOf(InboundOrderCreationData::class, $this->model);
    }

    /**
     * Test attribute "external_reference_id"
     */
    public function testPropertyExternalReferenceId()
    {
        $testValue = 'test';
        
        $this->model->setExternalReferenceId($testValue);
        $this->assertEquals($testValue, $this->model->getExternalReferenceId());
    }

    /**
     * Test attribute "origin_address"
     */
    public function testPropertyOriginAddress()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\Address();
        
        $this->model->setOriginAddress($testValue);
        $this->assertEquals($testValue, $this->model->getOriginAddress());
    }

    /**
     * Test attribute "packages_to_inbound"
     */
    public function testPropertyPackagesToInbound()
    {
        $testValue = [];
        
        $this->model->setPackagesToInbound($testValue);
        $this->assertEquals($testValue, $this->model->getPackagesToInbound());
    }

    /**
     * Test attribute "preferences"
     */
    public function testPropertyPreferences()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\InboundPreferences();
        
        $this->model->setPreferences($testValue);
        $this->assertEquals($testValue, $this->model->getPreferences());
    }
}
