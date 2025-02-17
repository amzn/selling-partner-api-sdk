<?php
/**
 * CreateRestrictedDataTokenResponseTest
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
use SpApi\Model\tokens\v2021_03_01\CreateRestrictedDataTokenResponse;

/**
 * CreateRestrictedDataTokenResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the createRestrictedDataToken operation.
 * @package     SpApi
 */
class CreateRestrictedDataTokenResponseTest extends TestCase
{

    private CreateRestrictedDataTokenResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateRestrictedDataTokenResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateRestrictedDataTokenResponse"
     */
    public function testCreateRestrictedDataTokenResponse()
    {
        $this->assertInstanceOf(CreateRestrictedDataTokenResponse::class, $this->model);
    }

    /**
     * Test attribute "restricted_data_token"
     */
    public function testPropertyRestrictedDataToken()
    {
        $testValue = 'test';
        
        $this->model->setRestrictedDataToken($testValue);
        $this->assertEquals($testValue, $this->model->getRestrictedDataToken());
    }

    /**
     * Test attribute "expires_in"
     */
    public function testPropertyExpiresIn()
    {
        $testValue = 123;
        
        $this->model->setExpiresIn($testValue);
        $this->assertEquals($testValue, $this->model->getExpiresIn());
    }
}
