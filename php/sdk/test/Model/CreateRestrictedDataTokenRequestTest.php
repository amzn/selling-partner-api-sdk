<?php
/**
 * CreateRestrictedDataTokenRequestTest
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
use SpApi\Model\tokens\v2021_03_01\CreateRestrictedDataTokenRequest;

/**
 * CreateRestrictedDataTokenRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the createRestrictedDataToken operation.
 * @package     SpApi
 */
class CreateRestrictedDataTokenRequestTest extends TestCase
{

    private CreateRestrictedDataTokenRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateRestrictedDataTokenRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateRestrictedDataTokenRequest"
     */
    public function testCreateRestrictedDataTokenRequest()
    {
        $this->assertInstanceOf(CreateRestrictedDataTokenRequest::class, $this->model);
    }

    /**
     * Test attribute "target_application"
     */
    public function testPropertyTargetApplication()
    {
        $testValue = 'test';
        
        $this->model->setTargetApplication($testValue);
        $this->assertEquals($testValue, $this->model->getTargetApplication());
    }

    /**
     * Test attribute "restricted_resources"
     */
    public function testPropertyRestrictedResources()
    {
        $testValue = [];
        
        $this->model->setRestrictedResources($testValue);
        $this->assertEquals($testValue, $this->model->getRestrictedResources());
    }
}
