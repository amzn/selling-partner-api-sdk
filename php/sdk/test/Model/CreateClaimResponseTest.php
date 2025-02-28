<?php
/**
 * CreateClaimResponseTest
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
use SpApi\Model\shipping\v2\CreateClaimResponse;

/**
 * CreateClaimResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the createClaim operation.
 * @package     SpApi
 */
class CreateClaimResponseTest extends TestCase
{

    private CreateClaimResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateClaimResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateClaimResponse"
     */
    public function testCreateClaimResponse()
    {
        $this->assertInstanceOf(CreateClaimResponse::class, $this->model);
    }

    /**
     * Test attribute "claim_id"
     */
    public function testPropertyClaimId()
    {
        $testValue = 'test';
        
        $this->model->setClaimId($testValue);
        $this->assertEquals($testValue, $this->model->getClaimId());
    }
}
