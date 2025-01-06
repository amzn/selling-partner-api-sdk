<?php
/**
 * OwnerConstraintTest
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
use OpenAPI\Client\Model\fulfillmentInbound\OwnerConstraint;

/**
 * OwnerConstraintTest Class Doc Comment
 *
 * @category    Class
 * @description A constraint that can apply to an individual owner. If no constraint is specified, both &#x60;AMAZON&#x60; and &#x60;SELLER&#x60; are acceptable.
 * @package     OpenAPI\Client
 */
class OwnerConstraintTest extends TestCase
{

    private OwnerConstraint $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OwnerConstraint();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OwnerConstraint"
     */
    public function testOwnerConstraint()
    {
        $this->assertInstanceOf(OwnerConstraint::class, $this->model);
    }
}
