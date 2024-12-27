<?php
/**
 * AllOwnersConstraintTest
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
use OpenAPI\Client\Model\fulfillmentinbound\AllOwnersConstraint;

/**
 * AllOwnersConstraintTest Class Doc Comment
 *
 * @category    Class
 * @description A constraint that applies to all owners. If no constraint is specified, defer to any individual owner constraints.
 * @package     OpenAPI\Client
 */
class AllOwnersConstraintTest extends TestCase
{

    private AllOwnersConstraint $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AllOwnersConstraint();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AllOwnersConstraint"
     */
    public function testAllOwnersConstraint()
    {
        $this->assertInstanceOf(AllOwnersConstraint::class, $this->model);
    }
}
