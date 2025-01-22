<?php
/**
 * ClientReferenceDetailTest
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
use OpenAPI\Client\Model\shipping\ClientReferenceDetail;

/**
 * ClientReferenceDetailTest Class Doc Comment
 *
 * @category    Class
 * @description Client Reference Details
 * @package     OpenAPI\Client
 */
class ClientReferenceDetailTest extends TestCase
{

    private ClientReferenceDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ClientReferenceDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ClientReferenceDetail"
     */
    public function testClientReferenceDetail()
    {
        $this->assertInstanceOf(ClientReferenceDetail::class, $this->model);
    }

    /**
     * Test attribute "client_reference_type"
     */
    public function testPropertyClientReferenceType()
    {
        $enumInstance = new ClientReferenceDetail();
        $allowedValues = $enumInstance->getClientReferenceTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setClientReferenceType($testValue);
        $this->assertEquals($testValue, $this->model->getClientReferenceType());
    }

    /**
     * Test attribute "client_reference_id"
     */
    public function testPropertyClientReferenceId()
    {
        $testValue = 'test';
        
        $this->model->setClientReferenceId($testValue);
        $this->assertEquals($testValue, $this->model->getClientReferenceId());
    }
}
